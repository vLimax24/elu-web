import { v, ConvexError } from "convex/values"
import { internalQuery, internalMutation } from "./_generated/server"
import { authQuery } from "./util"

export const getUserById = internalQuery({
    args: { userId: v.string() },
    handler: async (ctx, args) => {
        const user = await ctx.db
            .query("users")
            .withIndex("by_clerkId", q => q.eq("clerkId", args.userId))
            .first()

        return user
    },
})

export const getMyUser = authQuery({
    args: {},
    handler: async ctx => ctx.user,
  })

export const createUser = internalMutation({
    args: {
        email: v.any(),
        clerkId: v.string(),
        name: v.string(),
        profileImage: v.string(),
    },
    handler: async (ctx, args) => {
        const user = await ctx.db
            .query("users")
            .withIndex("by_clerkId", q => q.eq("clerkId", args.clerkId))
            .first()

        if (user) return

        await ctx.db.insert("users", {
            email: args.email,
            clerkId: args.clerkId,
            profileImage: args.profileImage,
            name: args.name,
            xp: 0,
            username: "",
            settings: {
                notificationsEnabled: false,
            },
        })
    },
})

export const deleteUser = internalMutation({
    args: { clerkId: v.string() },
    handler: async (ctx, args) => {
        const user = await ctx.db
            .query("users")
            .withIndex("by_clerkId", q => q.eq("clerkId", args.clerkId))
            .first()

        if (!user) return

        await ctx.db.delete(user._id)
    },
})

export const updateUser = internalMutation({
    args: { clerkId: v.string(), name: v.string(), profileImage: v.string() },
    handler: async (ctx, args) => {
        const user = await ctx.db
            .query("users")
            .withIndex("by_clerkId", q => q.eq("clerkId", args.clerkId))
            .first()

        if (!user) {
            throw new ConvexError("user not found")
        }

        await ctx.db.patch(user._id, {
            name: args.name,
            profileImage: args.profileImage,
        })
    },
})

export const getProfile = authQuery({
    handler(ctx) {
        return ctx.auth.getUserIdentity()
    },
})
import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values"

export default defineSchema({
    users: defineTable({
        clerkId: v.string(),
        email: v.string(),
        name: v.string(),
        profileImage: v.string(),
        username: v.string(),
        settings: v.object({
            notificationsEnabled: v.boolean(),
        }),
        xp: v.number(),
    })
        .searchIndex("search_username", {
            searchField: "username",
        })
        .index("by_clerkId", ["clerkId"]),
})
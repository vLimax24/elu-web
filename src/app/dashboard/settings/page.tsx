
"use client"
import { useQuery } from 'convex/react';
import { api } from '../../../../convex/_generated/api';
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export default function SettingsPage() {
    const userProfile = useQuery(api.users.getProfile);

    if (!userProfile) {
        return <div>Loading...</div>;
    }

    return (
        <div className="container mx-auto p-4">
            <Card>
                <CardHeader>
                    <CardTitle>Profile Settings</CardTitle>
                    <CardDescription>
                        Manage your account information here.
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <div className="grid gap-4">
                        <div className="grid grid-cols-4 items-center justify-start gap-4">
                            <Label htmlFor="name" className="text-right">Name</Label>
                            <Input id="name" value={userProfile.name} readOnly className="col-span-3" />
                        </div>
                        <div className="grid grid-cols-4 items-center gap-4">
                            <Label htmlFor="email" className="text-right">Email</Label>
                            <Input id="email" type="email" value={userProfile.email} readOnly className="col-span-3" />
                        </div>
                        {/* Add other profile fields as needed */}
                    </div>
                </CardContent>
            </Card>
        </div>
    );
}


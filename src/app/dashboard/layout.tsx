export default function DashboardLayout({ children }: { children: React.ReactNode }) {
    return (
        <div className="bg-backgroundColor min-h-screen">
            {children}
        </div>
    );
}
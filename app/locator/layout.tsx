
export default function RootLayout({
    children,
    }: Readonly<{
        children: React.ReactNode;
    }>) {
        return (
        <div
            className={`h-full w-full bg-slate-950 p-2`}
            >
            <div className="h-full w-full bg-slate-900 rounded-lg">
                {children}
            </div>
        </div>
        );
    }
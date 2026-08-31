import AdminHeader from "./header";
import AdminSideBar from "./sidebar";


function AdminLayout() {
    return (  
        <div className="flex min-h-screen w-full">
            {/* admin sidebar */}
            <AdminSideBar/>
            <div className="flex flex-1 flex-col">
                {/* admin header */}
                <AdminHeader/>
                <main className="flex flex-1 bg-muted/40 p-4 md:p-6">
                    <outlet/>
                </main>
            </div>
        </div>
    );
}

export default AdminLayout;
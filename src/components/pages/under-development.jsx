import { Link } from "react-router";

const UnderDevelopment = ({ to="/", children = "Kembali ke Beranda" }) => {
    return (
        <div className="min-h-screen flex items-center justify-center bg-black text-white">
            <div className="text-center">
                <h1 className="text-2xl mb-4">Halaman sedang dalam pengembangan</h1>
                <Link 
                    to={to} 
                    className="text-blue-500 hover:underline"
                >
                    {children}
                </Link>
            </div>
        </div>
    );
};

export default UnderDevelopment;
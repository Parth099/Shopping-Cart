import { Link } from "react-router-dom";

export default function ErrorPage() {
    return (
        <div className="min-h-screen min-w-full flex flex-col justify-center content-between">
            <div className="text-center text-white">
                <p className="boldface text-9xl mb-6">404</p>
                <p className="boldface text-6xl mb-4">This page does not exist</p>
                <Link to={"/"} className="text-corange boldface underline hover:text-cred visited:text-corange text-4xl">
                    Return to Store
                </Link>
            </div>
        </div>
    );
}

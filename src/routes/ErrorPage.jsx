import { Link } from "react-router-dom";

export default function ErrorPage() {
    return (
        <div className="min-h-screen min-w-full flex flex-col justify-center content-between">
            <div className="text-center">
                <p className="text-cgreen boldface text-6xl">This page does not exist</p>
                <Link to={"/"} className="text-corange font-bold underline hover:text-cred visited:text-corange text-3xl">
                    Return to Store
                </Link>
            </div>
        </div>
    );
}

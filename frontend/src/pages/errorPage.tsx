import { Button } from "@/components/ui/button";
import { useNavigate, useRouteError } from "react-router-dom";

export default function ErrorPage() {
  const error: any = useRouteError();
  console.error(error);

  document.title = "Choacury - Error";

  const navigate = useNavigate();

  if(error.statusText === "Not Found") {
    return (
        <div className="flex justify-center flex-col m-auto h-screen">
            <div id="error-page" className="mx-auto max-w-7xl items-center text-center p-6">
            <h1 className="text-4xl">404</h1>
            <p className="text-2xl">The page you are trying to see does not exist.</p>
            <p className="text-1xl">
                <i>{error.statusText || error.message}</i>
            </p>
            <br />
            <Button onClick={() => { navigate("/"); }}>Go home</Button>
        </div>
    </div>
    );
  }

  return (
    <div className="flex justify-center flex-col m-auto h-screen">
        <div id="error-page" className="mx-auto max-w-7xl items-center text-center p-6">
        <h1 className="text-4xl">Oops!</h1>
        <p className="text-2xl">Sorry, an unexpected error has occurred.</p>
        <p className="text-1xl">
            <i>{error.statusText || error.message}</i>
        </p>
        </div>
    </div>
  );
}
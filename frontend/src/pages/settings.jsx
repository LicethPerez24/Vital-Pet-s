import { useState, useEffect } from "react";
import { Navigate } from "react-router-dom";
import { Spinner } from "flowbite-react";

export function Settings() {
  const [auth, setAuth] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (!token) {
      setAuth(false);
      return;
    }

    fetch("http://localhost:4000/update", {
      method: "GET",
      headers: {
        authorization: `Bearer ${token}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.message === "funcionando") {
          setAuth(true);
        } else {
          setAuth(false);
        }
      });
  }, []);

  if (auth === null) {
    return (
      <div className="w-full h-full flex flex-wrap gap-2">
        <div className="text-center">
          <Spinner
            color="success"
            aria-label="Center-aligned spinner example"
            size="xl"
          />
        </div>
      </div>
    );
  }

  return <>{auth ? <div>it works</div> : <Navigate to="/log-in" replace />}</>;
}

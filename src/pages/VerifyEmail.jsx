import { useSearchParams } from "react-router-dom";
import Spinner from "../ui/Spinner";
import { useEffect } from "react";
import { useVerifyEmail } from "../services/useVerifyEmail";

function VerifyEmail() {
  const [searchParams, setSearchParams] = useSearchParams();
  const { verifyEmail } = useVerifyEmail();
  useEffect(() => {
    const email = searchParams.get("email");
    const verificationToken = searchParams.get("verificationToken");
    verifyEmail({ email, verificationToken });
  }, []);
  return (
    <div className="h-dvh flex justify-center items-center">
      <Spinner />
    </div>
  );
}

export default VerifyEmail;

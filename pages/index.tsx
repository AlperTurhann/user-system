import Banner from "@/components/Banner";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center text-center p-5 bg-gray-50">
      <h1 className="text-3xl font-extrabold my-10 text-transparent bg-clip-text bg-gradient-to-r from-sky-700 to-emerald-700">
        Welcome to the Social!
      </h1>
      <main className="w-full flex flex-col gap-y-5">
        <Banner
          title="Create an account"
          description="Join us today and start connecting with others."
          buttonText="Register"
          routerPage="/register"
          colorStart="from-sky-700"
          colorEnd="to-emerald-700"
        />
        <Banner
          title="Login"
          description="Already have an account? Sign in here."
          buttonText="Login"
          routerPage="/login"
          colorStart="from-emerald-700"
          colorEnd="to-sky-700"
        />
      </main>
    </div>
  );
}

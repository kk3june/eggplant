import FormInput from "@/compoennts/form-input";

export default function Home() {
  return (
    <main className="flex flex-col items-center bg-slate-800 text-white min-h-screen py-10">
      <div className="flex flex-col items-center gap-2">
      <span className="text-8xl">🍆</span>
      <FormInput type='email' placeholder="Email" required errors={['']} />
      <FormInput type='text' placeholder="Username"  required errors={[]}/>
      <FormInput type='passwords' placeholder="Password" required errors={[]} />
      <button className="w-full rounded-md bg-violet-500">Login</button>
      </div>
    </main>
  );
}

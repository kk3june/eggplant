import FormButton from "@/components/form-button";
import FormInput from "@/components/form-input";

export default function Home() {
  return (
    <main className="flex flex-col gap-10 py-8 px-6">
      <div className="flex flex-col gap-6 items-center">
        <span className="text-8xl">🍆</span>
        <FormInput type='email' placeholder="Email" required errors={[]} />
        <FormInput type='text' placeholder="Username"  required errors={[]}/>
        <FormInput type='passwords' placeholder="Password" required errors={[]} />
        <FormButton />
      </div>
    </main>
  );
}

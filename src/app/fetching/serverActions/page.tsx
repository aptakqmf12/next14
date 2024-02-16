import SubmitButton from "./_component/submit-button";

export default function ServerActionPage() {
  //  action
  async function handleFormAction(formData: FormData) {
    "use server";

    const data = {
      customerId: formData.get("customerId"),
      amount: formData.get("amount"),
      status: formData.get("status"),
    };

    console.log("data", data);

    // mutate data
    // revalidate cache
  }

  return (
    <form action={handleFormAction}>
      <input type="text" name="customerId" />
      <input type="text" name="amount" />
      <input type="text" name="status" />

      <SubmitButton />
    </form>
  );
}

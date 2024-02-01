import { FormEvent, useEffect, useState } from "react";
import { Button } from "./ui/button";
import { DialogTitle } from "./ui/dialog";
import { doc, updateDoc } from "firebase/firestore";
import { db } from "@/lib/config/firebase";
import { toast } from "sonner";
import { Loader } from "lucide-react";
import { Profile } from "@/lib/interface";

export function EditProfileForm(props: { formPrefillData: Profile }) {
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    // prefill the form with the user's data from the database when the component mounts
    Object.keys(props.formPrefillData).forEach((key) => {
      const input = document.querySelector(`[name=${key}]`); // get the input element
      const data: string = props.formPrefillData[key];
      if (!input) return;
      input.setAttribute("value", data); // set the value of the input to the corresponding value from the database
    });
  }, [props.formPrefillData]);

  async function handleFormSubmit(e: FormEvent) {
    e.preventDefault();
    setIsLoading(true);
    try {
      const formData = new FormData(e.target as HTMLFormElement); // get the form data
      const data = Object.fromEntries(formData); // convert the form data to an object
      await updateDoc(doc(db, "kyc/johndoe"), data); // update the user's profile in the database
      toast.success("Profile updated successfully");
    } catch (error) {
      toast.error(String(error));
    }
    setIsLoading(false);
  }

  return (
    <form className="gap-10 grid" onSubmit={handleFormSubmit}>
      <DialogTitle className="text-center">Personal Information</DialogTitle>
      <fieldset className="flex items-center justify-between gap-10">
        <div>
          <label htmlFor="first_name">First name</label>
          <input required name="first_name" placeholder="John" />
        </div>
        <div>
          <label htmlFor="last_name">Last name</label>
          <input required placeholder="Doe" name="last_name" />
        </div>
      </fieldset>
      <fieldset className="flex items-center justify-between gap-10">
        <div>
          <label htmlFor="dob">Date of birth</label>
          <input required type="date" name="dob" />
        </div>
        <div>
          <label htmlFor="phone">Phone</label>
          <input required type="tel" name="phone" />
        </div>
      </fieldset>
      <hr />
      <DialogTitle className="text-center">Personal Address</DialogTitle>
      <fieldset className="flex items-center justify-between gap-10">
        <div>
          <label htmlFor="country">Country</label>
          <input required placeholder="South Africa" name="country" />
        </div>
        <div>
          <label htmlFor="city">City</label>
          <input placeholder="Johannesburg" required name="city" />
        </div>
      </fieldset>
      <fieldset className="flex items-center justify-between gap-10">
        <div>
          <label htmlFor="postal_code">Postal code</label>
          <input
            required
            name="postal_code"
            type="number"
            placeholder="12345"
          />
        </div>
        <div>
          <label htmlFor="address">Address</label>
          <input required name="address" placeholder="Acme, 404 street" />
        </div>
      </fieldset>
      <Button disabled={isLoading}>
        {isLoading ? <Loader className="animate-spin" /> : "Save"}
      </Button>
    </form>
  );
}

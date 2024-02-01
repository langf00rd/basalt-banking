import { Button } from "./ui/button";
import { DialogTitle } from "./ui/dialog";

export function EditProfileForm() {
  return (
    <form action="" className="gap-10 grid">
      <DialogTitle className="text-center">Personal Information</DialogTitle>
      <fieldset className="flex items-center justify-between gap-10">
        <div>
          <label htmlFor="first-name">First name</label>
          <input placeholder="John" />
        </div>
        <div>
          <label htmlFor="last-name">Last name</label>
          <input placeholder="Doe" />
        </div>
      </fieldset>
      <fieldset className="flex items-center justify-between gap-10">
        <div>
          <label htmlFor="first-name">Date of birth</label>
          <input type="date" />
        </div>
        <div>
          <label htmlFor="last-name">Phone</label>
          <input type="tel" />
        </div>
      </fieldset>
      <hr />
      <DialogTitle className="text-center">Personal Address</DialogTitle>
      <fieldset className="flex items-center justify-between gap-10">
        <div>
          <label htmlFor="first-name">First name</label>
          <input placeholder="John" />
        </div>
        <div>
          <label htmlFor="last-name">Last name</label>
          <input placeholder="Doe" />
        </div>
      </fieldset>
      <fieldset className="flex items-center justify-between gap-10">
        <div>
          <label htmlFor="first-name">Date of birth</label>
          <input type="date" />
        </div>
        <div>
          <label htmlFor="last-name">Phone</label>
          <input type="tel" />
        </div>
      </fieldset>
      <Button>Save</Button>
    </form>
  );
}

import { EditProfileForm } from "@/components/edit-profile-form";
import MainLayout from "@/components/layouts/main-layout";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { Verified } from "lucide-react";

export default function DetailsPage() {
  return (
    <MainLayout title="Details">
      <div className="bg-blue-100/50 p-5 px-10 rounded-2xl space-y-3">
        <p className="text-black font-medium">Identity</p>
        <div className="flex items-center justify-between">
          <div className="max-w-3xl">
            <p>
              Verify your identity by uploading your personal documents. We use
              this verification to confirm you are a real person and legally
              able to work in your location.
            </p>
          </div>
          <Button>
            <Verified />
            Verify now
          </Button>
        </div>
      </div>
      <div className="space-y-10">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <Avatar>
              <AvatarImage src="https://github.com/shadcn.png" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
            <p className="underline text-primary">Edit account photo</p>
          </div>
          <div className="flex space-x-5">
            <Dialog>
              <DialogTrigger asChild>
                <Button
                  variant="outline"
                  className="border-primary text-primary"
                >
                  Edit details
                </Button>
              </DialogTrigger>
              <DialogContent>
                <EditProfileForm />
              </DialogContent>
            </Dialog>
            <Button>View details</Button>
          </div>
        </div>
        <div className="flex space-x-10">
          <Card className="p-10 flex-1 space-y-5">
            <h3>Personal information</h3>
            <div className="flex justify-between">
              <div className="space-y-3">
                <p>First name</p>
                <h3 className="font-medium">Kate</h3>
              </div>
              <div className="space-y-3">
                <p>Last name</p>
                <h3 className="font-medium">Doe</h3>
              </div>
            </div>
            <div className="flex justify-between">
              <div className="space-y-3">
                <p>Date of birth</p>
                <h3 className="font-medium">Feb 1, 1999</h3>
              </div>
              <div className="space-y-3">
                <p>Phone</p>
                <h3 className="font-medium">+00 000 000 0000</h3>
              </div>
            </div>
          </Card>
          <Card className="p-10 flex-1 space-y-5">
            <h3>Personal address</h3>
            <div className="flex justify-between">
              <div className="space-y-3">
                <p>Country</p>
                <h3 className="font-medium">Ghana</h3>
              </div>
              <div className="space-y-3">
                <p>City</p>
                <h3 className="font-medium">Accra</h3>
              </div>
            </div>
            <div className="flex justify-between">
              <div className="space-y-3">
                <p>Address</p>
                <h3 className="font-medium">Some street, ST 403</h3>
              </div>
              <div className="space-y-3">
                <p>Postal code</p>
                <h3 className="font-medium">00233</h3>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </MainLayout>
  );
}

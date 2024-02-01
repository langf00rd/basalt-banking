import { EditProfileForm } from "@/components/edit-profile-form";
import MainLayout from "@/components/layouts/main-layout";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { db } from "@/lib/config/firebase";
import { Profile } from "@/lib/interface";
import { doc, onSnapshot } from "firebase/firestore";
import { Loader, Verified } from "lucide-react";
import { useEffect, useState } from "react";
import { toast } from "sonner";

export default function DetailsPage() {
  const [isLoading, setIsLoading] = useState(true);
  const [profileData, setProfileData] = useState<Profile | null>(null);

  useEffect(() => {
    (async () => {
      // listen for changes to the profile document and update the state
      onSnapshot(doc(db, "kyc/johndoe"), (doc) => {
        if (!doc.exists()) toast.error("kyc profile not found");
        else setProfileData(doc.data() as Profile);
        setIsLoading(false);
      });
    })();
  }, []);

  return (
    <MainLayout title="Profile">
      <>
        <div className="bg-blue-100/50 p-5 px-10 rounded-2xl space-y-3">
          <p className="text-black font-medium">Identity</p>
          <div className="flex items-center justify-between">
            <div className="max-w-3xl">
              <p>
                Verify your identity by uploading your personal documents. We
                use this verification to confirm you are a real person and
                legally able to work in your location.
              </p>
            </div>
            <Button>
              <Verified />
              Verify now
            </Button>
          </div>
        </div>
        {isLoading ? (
          <div className="flex items-center justify-center h-[300px]">
            <Loader className="animate-spin" />
          </div>
        ) : (
          <div className="space-y-10">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <Avatar>
                  <AvatarImage
                    fetchPriority="high"
                    className="object-cover"
                    src="https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                  />
                  <AvatarFallback>CN</AvatarFallback>
                </Avatar>
                <p className="underline text-primary">Edit account photo</p>
              </div>
              <div className="flex space-x-5">
                {profileData && (
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
                      <EditProfileForm formPrefillData={profileData} />
                    </DialogContent>
                  </Dialog>
                )}
                <Button>View details</Button>
              </div>
            </div>
            <div className="flex space-x-10">
              <Card className="p-10 flex-1 space-y-5">
                <h3>Personal information</h3>
                <div className="flex justify-between">
                  <div className="space-y-3">
                    <p>First name</p>
                    <h3 className="font-medium">{profileData?.first_name}</h3>
                  </div>
                  <div className="space-y-3 text-right">
                    <p>Last name</p>
                    <h3 className="font-medium">{profileData?.last_name}</h3>
                  </div>
                </div>
                <div className="flex justify-between">
                  <div className="space-y-3">
                    <p>Date of birth</p>
                    <h3 className="font-medium">{profileData?.dob}</h3>
                  </div>
                  <div className="space-y-3 text-right">
                    <p>Phone</p>
                    <h3 className="font-medium">{profileData?.phone}</h3>
                  </div>
                </div>
              </Card>
              <Card className="p-10 flex-1 space-y-5">
                <h3>Personal address</h3>
                <div className="flex justify-between">
                  <div className="space-y-3">
                    <p>Country</p>
                    <h3 className="font-medium">{profileData?.country}</h3>
                  </div>
                  <div className="space-y-3 text-right">
                    <p>City</p>
                    <h3 className="font-medium">{profileData?.city}</h3>
                  </div>
                </div>
                <div className="flex justify-between">
                  <div className="space-y-3">
                    <p>Address</p>
                    <h3 className="font-medium">{profileData?.address}</h3>
                  </div>
                  <div className="space-y-3 text-right">
                    <p>Postal code</p>
                    <h3 className="font-medium">{profileData?.postal_code}</h3>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        )}
      </>
    </MainLayout>
  );
}

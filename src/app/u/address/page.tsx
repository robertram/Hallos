import AccountBanner from "@/components/ui/AccountBanner";
import { UserData } from "@/types/banner.type";

export default function AccountPage() {

    const mockUserData: UserData = {
        id: "021232203",
        name: "Kevin",
        lastName: "Latino",
        email: "kevin.latino@hallos.com",
        bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
        bannerImage: "/images/BannerAccount.png",
        profilePicture: "/images/profile.png",
        socialMedia: {
            x: "https://x.com/Kevs_jLM",
            instagram: "qdqwdq",
            facebook: "ss"
        }
    };

    return (
        <div className="w-full flex justify-center p-4">
            <AccountBanner {...mockUserData} />
        </div>
    );
}

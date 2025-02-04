import Image from "next/image";
import { UserData } from "@/types/banner.type";
import Button from "../common/Button/Button";
import { FaTwitter, FaInstagram, FaFacebook } from "react-icons/fa6";

export default function UserProfile({
    id,
    name,
    lastName,
    email,
    bannerImage,
    profilePicture,
    bio,
    socialMedia,
}: UserData) {
    return (
        <div className="w-[100%] h-full flex flex-col text-white p-4 rounded-lg gap-10">
            <div className="w-full relative">
                <Image
                    src={bannerImage || "/images/BannerAccount.png"}
                    alt="Banner Image"
                    width={1450}
                    height={200}
                    className="rounded-lg"
                />

                {socialMedia && (
                    <div className="absolute bottom-4 right-4 flex gap-2">
                        {socialMedia.x && (
                            <a
                                href={socialMedia.x}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="bg-white/20 p-3 rounded-full flex items-center justify-center hover:bg-blue-500/40 transition"
                            >
                                <FaTwitter className="text-white text-xl" />
                            </a>
                        )}
                        {socialMedia.instagram && (
                            <a
                                href={socialMedia.instagram}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="bg-white/20 p-3 rounded-full flex items-center justify-center hover:bg-pink-500/40 transition"
                            >
                                <FaInstagram className="text-white text-xl" />
                            </a>
                        )}
                        {socialMedia.facebook && (
                            <a
                                href={socialMedia.facebook}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="bg-white/20 p-3 rounded-full flex items-center justify-center hover:bg-blue-700/40 transition"
                            >
                                <FaFacebook className="text-white text-xl" />
                            </a>
                        )}
                    </div>
                )}
                
            </div>

            <div className="flex gap-8 w-full">
                <Image
                    src={profilePicture || "/images/ProfilePlaceholder.png"}
                    alt="Profile Picture"
                    width={180}
                    height={10}
                    className="rounded-full border-4 border-[#0D0D0D]"
                />

                <div className="flex gap-2 flex-col w-[90%]">
                    <div className="flex justify-between">
                        <h2 className="flex justify-center gap-4 items-center text-2xl font-semibold mt-2 text-white">
                            {name} {lastName}
                            <Image
                                src="/images/verified.png"
                                alt="Verified Icon"
                                width={28}
                                height={4}
                            />
                        </h2>
                        <Button icon="FaPen" className="w-32 flex items-center gap-2" type="outline">
                           Edit profile
                        </Button>
                    </div>
                    <p className="text-[#A4A7AE]">{email}</p>
                    <p className="text-sm text-[#A4A7AE] w-full mt-2">{bio}</p>
                </div>
            </div>
        </div>
    );
}

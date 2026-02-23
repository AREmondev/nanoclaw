"use client";

import React from "react";
import { Text, textVariants } from "../ui/Text";
import { cn } from "@/lib/utils";
import { Button } from "../ui/Button";
import { usePathname } from "next/navigation";
import Link from "next/link";

const SOCIAL_ICONS = [
  {
    name: "facebook",
    width: 10,
    height: 16,
    viewBox: "0 0 10 16",
    path: "M2.0625 9.34375H0V6.3125H2.0625V4.96875C2.0625 1.59375 3.59375 0 6.9375 0C7.5625 0 8.65625 0.125 9.125 0.25V3.03125C8.875 3 8.46875 2.96875 7.96875 2.96875C6.3125 2.96875 5.6875 3.59375 5.6875 5.21875V6.3125H8.96875L8.40625 9.34375H5.6875V16H2.0625V9.34375Z",
    hoverFill: "black",
  },
  {
    name: "x",
    width: 15,
    height: 13,
    viewBox: "0 0 15 13",
    path: "M11.3125 0H13.5312L8.71875 5.5L14.375 13H9.9375L6.46875 8.46875L2.5 13H0.28125L5.4375 7.125L0 0H4.53125L7.6875 4.15625L11.3125 0ZM10.5312 11.6875H11.7812L3.875 1.25H2.5625L10.5312 11.6875Z",
    hoverFill: "black",
  },
  {
    name: "pinterest",
    width: 16,
    height: 16,
    viewBox: "0 0 16 16",
    path: "M15.5 7.75C15.5 12.0312 12.0312 15.5 7.75 15.5C6.9375 15.5 6.1875 15.375 5.46875 15.1562C5.78125 14.625 6.25 13.7812 6.40625 13.125C6.5 12.75 6.90625 11.2812 6.90625 11.2812C7.15625 11.75 7.90625 12.1562 8.6875 12.1562C11 12.1562 12.6875 10.0312 12.6875 7.34375C12.6875 4.78125 10.5938 2.875 7.90625 2.875C4.5625 2.875 2.8125 5.125 2.8125 7.5625C2.8125 8.6875 3.40625 10.125 4.375 10.5625C4.53125 10.625 4.59375 10.5938 4.625 10.4688C4.65625 10.3438 4.78125 9.84375 4.84375 9.59375C4.875 9.5 4.84375 9.4375 4.78125 9.375C4.46875 8.96875 4.21875 8.25 4.21875 7.59375C4.21875 5.875 5.5 4.21875 7.71875 4.21875C9.625 4.21875 10.9688 5.53125 10.9688 7.375C10.9688 9.46875 9.90625 10.9375 8.53125 10.9375C7.75 10.9375 7.1875 10.3125 7.375 9.53125C7.59375 8.625 8 7.625 8 6.96875C8 6.375 7.6875 5.875 7.03125 5.875C6.25 5.875 5.625 6.65625 5.625 7.75C5.625 8.4375 5.875 8.90625 5.875 8.90625C5.875 8.90625 5.09375 12.125 4.96875 12.75C4.8125 13.4062 4.875 14.3438 4.9375 14.9688C2.03125 13.8438 0 11.0312 0 7.75C0 3.46875 3.46875 0 7.75 0C12.0312 0 15.5 3.46875 15.5 7.75Z",
    hoverFill: "black",
  },
  {
    name: "youtube",
    width: 18,
    height: 12,
    viewBox: "0 0 18 12",
    path: "M16.7188 1.875C17.0625 3.21875 17.0625 6 17.0625 6C17.0625 6 17.0625 8.8125 16.7188 10.1562C16.5312 10.875 15.9375 11.4375 15.2188 11.6562C13.875 12 8.53125 12 8.53125 12C8.53125 12 3.1875 12 1.875 11.6562C1.125 11.4375 0.5625 10.875 0.34375 10.1562C0 8.8125 0 6 0 6C0 6 0 3.21875 0.34375 1.875C0.5625 1.125 1.125 0.5625 1.875 0.375C3.1875 0 8.53125 0 8.53125 0C8.53125 0 13.875 0 15.1875 0.375C15.9375 0.5625 16.5312 1.125 16.7188 1.875ZM6.78125 8.5625L11.25 6L6.78125 3.46875V8.5625Z",
    hoverFill: "black",
  },
  {
    name: "instagram",
    width: 15,
    height: 15,
    viewBox: "0 0 15 15",
    path: "M7 3.4375C9 3.4375 10.5938 5.0625 10.5938 7.03125C10.5938 9.03125 8.96875 10.625 7 10.625C5 10.625 3.40625 9 3.40625 7.03125C3.40625 5.03125 5.03125 3.4375 7 3.4375ZM7 4.6875C5.6875 4.71875 4.65625 5.75 4.65625 7.03125C4.6875 8.34375 5.71875 9.375 7 9.375C8.3125 9.34375 9.34375 8.3125 9.34375 7.03125C9.3125 5.71875 8.28125 4.6875 7 4.6875ZM9.90625 3.28125C9.90625 3.75 10.2812 4.125 10.75 4.125C11.2188 4.125 11.5938 3.75 11.5938 3.28125C11.5938 2.8125 11.2188 2.46875 10.75 2.46875C10.2812 2.46875 9.90625 2.8125 9.90625 3.28125ZM13.9688 4.15625C14.0312 5.3125 14.0312 8.75 13.9688 9.90625C13.9062 11.0312 13.6562 12.0312 12.8438 12.8438C12 13.6875 11.0312 13.9375 9.90625 13.9688C8.75 14.0625 5.28125 14.0625 4.125 13.9688C3 13.9375 2 13.6562 1.1875 12.8438C0.375 12.0312 0.09375 11.0312 0.0625 9.90625C0 8.75 0 5.28125 0.0625 4.125C0.125 3.03125 0.375 2.03125 1.1875 1.21875C2 0.375 3 0.125 4.125 0.0625C5.28125 0 8.75 0 9.90625 0.0625C11.0312 0.125 12 0.375 12.8438 1.21875C13.6562 2.03125 13.9062 3.03125 13.9688 4.15625ZM12.4688 11.1562C12.8438 10.25 12.75 8.0625 12.75 7.03125C12.75 6 12.8438 3.8125 12.4688 2.90625C12.2188 2.28125 11.75 1.8125 11.125 1.5625C10.2188 1.21875 8.03125 1.28125 7 1.28125C6 1.28125 3.8125 1.21875 2.875 1.5625C2.28125 1.8125 1.78125 2.28125 1.5625 2.90625C1.1875 3.8125 1.28125 6 1.28125 7.03125C1.28125 8.0625 1.1875 10.25 1.5625 11.1562C1.8125 11.7812 2.28125 12.25 2.875 12.5C3.8125 12.8438 6 12.7812 7 12.7812C8.03125 12.7812 10.2188 12.8438 11.125 12.5C11.75 12.25 12.2188 11.7812 12.4688 11.1562Z",
    hoverFill: "white",
  },
];

const SocialIcon = ({ icon }: { icon: (typeof SOCIAL_ICONS)[number] }) => {
  return (
    <span className="flex items-center cursor-pointer justify-center h-10 w-10 hover:bg-white border-white/10 border rounded-full group">
      <svg
        className="group-hover:hidden block"
        width={icon.width}
        height={icon.height}
        viewBox={icon.viewBox}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d={icon.path} fill="white" />
      </svg>
      <svg
        className="group-hover:block hidden"
        width={icon.width}
        height={icon.height}
        viewBox={icon.viewBox}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d={icon.path} fill={icon.hoverFill} />
      </svg>
    </span>
  );
};

const NanoclawLogo = () => (
  <svg
    width="1440"
    height="184"
    viewBox="0 0 1440 184"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="w-full h-auto"
  >
    <path
      d="M1440 38L1405.43 184H1340.93L1323.39 101.681L1304.81 184H1240.31L1206 38H1262.76L1274.88 126.791L1293.72 38H1354.86L1374.73 127.826L1387.11 38H1440Z"
      fill="#FF0000"
    />
    <path
      d="M1035 111C1035 96.0127 1037.57 83.0461 1042.72 72.1003C1048.04 60.9862 1055.25 52.5663 1064.34 46.8408C1073.43 40.9469 1083.64 38 1094.97 38C1104.41 38 1112.56 39.9366 1119.42 43.8097C1126.28 47.5144 1131.52 52.6505 1135.12 59.218V38H1192V184H1135.12V162.782C1131.52 169.349 1126.28 174.57 1119.42 178.443C1112.56 182.148 1104.41 184 1094.97 184C1083.64 184 1073.43 181.137 1064.34 175.412C1055.25 169.518 1048.04 161.098 1042.72 150.152C1037.57 139.038 1035 125.987 1035 111ZM1135.12 111C1135.12 103.422 1133.15 97.5283 1129.2 93.3183C1125.25 89.1084 1120.19 87.0035 1114.01 87.0035C1107.84 87.0035 1102.78 89.1084 1098.83 93.3183C1094.88 97.5283 1092.91 103.422 1092.91 111C1092.91 118.578 1094.88 124.472 1098.83 128.682C1102.78 132.892 1107.84 134.997 1114.01 134.997C1120.19 134.997 1125.25 132.892 1129.2 128.682C1133.15 124.472 1135.12 118.578 1135.12 111Z"
      fill="#FF0000"
    />
    <path
      d="M194 111C194 96.0127 196.574 83.0461 201.721 72.1003C207.04 60.9862 214.247 52.5663 223.341 46.8408C232.435 40.9469 242.644 38 253.969 38C263.406 38 271.556 39.9366 278.42 43.8097C285.283 47.5144 290.516 52.6505 294.12 59.218V38H351V184H294.12V162.782C290.516 169.349 285.283 174.57 278.42 178.443C271.556 182.148 263.406 184 253.969 184C242.644 184 232.435 181.137 223.341 175.412C214.247 169.518 207.04 161.098 201.721 150.152C196.574 139.038 194 125.987 194 111ZM294.12 111C294.12 103.422 292.146 97.5283 288.2 93.3183C284.254 89.1084 279.192 87.0035 273.015 87.0035C266.838 87.0035 261.776 89.1084 257.83 93.3183C253.883 97.5283 251.91 103.422 251.91 111C251.91 118.578 253.883 124.472 257.83 128.682C261.776 132.892 266.838 134.997 273.015 134.997C279.192 134.997 284.254 132.892 288.2 128.682C292.146 124.472 294.12 118.578 294.12 111Z"
      fill="#FF0000"
    />
    <path d="M1017 0V184H959V0H1017Z" fill="#FF0000" />
    <path
      d="M761 92C761 74.1111 764.596 58.1815 771.788 44.2111C779.151 30.2407 789.596 19.4222 803.124 11.7556C816.652 3.91852 832.577 0 850.899 0C866.653 0 880.694 2.98148 893.023 8.94445C905.523 14.737 915.626 23 923.332 33.7333C931.209 44.4667 936.431 56.9889 939 71.3H878.896C876.156 65.337 872.218 60.737 867.081 57.5C862.115 54.0926 856.379 52.3889 849.872 52.3889C840.282 52.3889 832.662 55.9667 827.012 63.1222C821.532 70.2778 818.792 79.9037 818.792 92C818.792 104.096 821.532 113.722 827.012 120.878C832.662 128.033 840.282 131.611 849.872 131.611C856.379 131.611 862.115 129.993 867.081 126.756C872.218 123.348 876.156 118.663 878.896 112.7H939C936.431 127.011 931.209 139.533 923.332 150.267C915.626 161 905.523 169.348 893.023 175.311C880.694 181.104 866.653 184 850.899 184C832.577 184 816.652 180.167 803.124 172.5C789.596 164.663 779.151 153.759 771.788 139.789C764.596 125.819 761 109.889 761 92Z"
      fill="#FF0000"
    />
    <path
      d="M626.5 184C612.143 184 599.222 181.053 587.737 175.159C576.251 169.265 567.215 160.845 560.628 149.9C554.209 138.785 551 125.819 551 111C551 96.1811 554.209 83.2987 560.628 72.3529C567.215 61.2387 576.251 52.7347 587.737 46.8408C599.222 40.9469 612.143 38 626.5 38C640.857 38 653.778 40.9469 665.263 46.8408C676.749 52.7347 685.701 61.2387 692.119 72.3529C698.706 83.2987 702 96.1811 702 111C702 125.819 698.706 138.785 692.119 149.9C685.701 160.845 676.749 169.265 665.263 175.159C653.778 181.053 640.857 184 626.5 184ZM626.5 135.502C631.736 135.502 636.128 133.481 639.675 129.439C643.221 125.23 644.995 119.083 644.995 111C644.995 102.917 643.221 96.8547 639.675 92.8132C636.128 88.6032 631.736 86.4983 626.5 86.4983C621.264 86.4983 616.872 88.6032 613.325 92.8132C609.779 96.8547 608.005 102.917 608.005 111C608.005 119.083 609.694 125.23 613.072 129.439C616.619 133.481 621.095 135.502 626.5 135.502Z"
      fill="#FF0000"
    />
    <path
      d="M478.872 38C495.55 38 508.531 43.5692 517.815 54.7077C527.272 65.8462 532 80.9261 532 99.9472V184H475.003V107.144C475.003 100.29 473.112 94.892 469.329 90.9507C465.719 86.838 460.819 84.7817 454.629 84.7817C448.267 84.7817 443.281 86.838 439.671 90.9507C436.06 94.892 434.255 100.29 434.255 107.144V184H377L377 38H434.255L434.255 61.1338C438.725 54.2793 444.657 48.7101 452.05 44.4261C459.615 40.142 468.556 38 478.872 38Z"
      fill="#FF0000"
    />
    <path
      d="M175 184H117.784L57.2165 91.4802V184H0V0H57.2165L117.784 94.0791V0H175V184Z"
      fill="#FF0000"
    />
  </svg>
);
export const CTA_CONTENT = {
  home: {
    title: "Ready to build something?",
    description: "Let’s collaborate to bring your digital vision to life.",
    buttonText: "Start Your Project",
  },

  service: {
    title: "Let’s Turn Your Idea Into\na Scalable Digital Product",
    description:
      "Tell us about your project — we’ll help you choose the right solution.",
    buttonText: "Start Your Project",
  },

  serviceDetails: {
    title: "Ready To Level Up Your User Experience?",
    description: "Or contact us to discuss your project.",
    buttonText: "Book a Free UX Audit",
  },
};
const Footer = () => {
  const pathname = usePathname();
  const ctaData =
    pathname === "/"
      ? CTA_CONTENT.home
      : pathname === "/services"
        ? CTA_CONTENT.service
        : pathname.startsWith("/services/")
          ? CTA_CONTENT.serviceDetails
          : CTA_CONTENT.home;
  return (
    <div className="bg-black w-full relative">
      <div className="max-w-[1800px] bg-red py-10 md:py-15 xl:py-20 left-1/2 transform -translate-x-1/2 absolute w-full -top-[60px] md:-top-[80px] xl:-top-[120px] mx-auto rounded-[16px] sm:rounded-[24px] xl:rounded-[40px]">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <Text variant={"section"} className="text-white  line-clamp-2">
              {ctaData.title}
            </Text>
            <div className="flex flex-col items-end justify-between gap-5">
              <Text variant={"body"} className="text-white">
                {ctaData.description}
              </Text>
              <Button variant={"white"}>{ctaData.buttonText}</Button>
            </div>
          </div>
        </div>
      </div>
      <div className="pt-[280px] md:pt-[160px] xl:pt-[240px] ">
        <div className="container">
          <div className="grid pb-15 md:pb-20 xl:pb-30 grid-cols-1 sm:grid-cols-2 xl:grid-cols-[250px_274px_183px_auto] gap-10 xl:gap-[60px] 2xl:gap-[100px]">
            <div className="flex flex-col gap-12">
              <div className="flex flex-col gap-10">
                <Text variant={"card"} className="text-white">
                  Location
                </Text>
                <Text variant={"body-sm"} className="text-[#898989]">
                  Germany 785 15h Street Office 478 Berlin
                </Text>
              </div>
              <div className="flex flex-col gap-10">
                <Text variant={"card"} className="text-white">
                  Contact
                </Text>
                <div className="flex flex-col">
                  <Text variant={"body-sm"} className="text-[#898989]">
                    +1 234 567 890 <br /> help@nanoclaw.com
                  </Text>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-10">
              <div className="flex flex-col gap-10">
                <Text variant={"card"} className="text-white">
                  Quick Links
                </Text>
                <div className="flex items-start gap-15">
                  {[
                    [
                      { label: "Work" },
                      { label: "About" },
                      { label: "Contact" },
                      { label: "Pricing" },
                      { label: "Career" },
                    ],
                    [
                      { label: "Blog" },
                      { label: "Privacy Policy", underlined: true },
                      { label: "Sitemap" },
                      { label: "Terms & Condition" },
                    ],
                  ].map((col, idx) => (
                    <div key={idx} className="flex flex-col gap-[30px]">
                      {col.map((link) => (
                        // <Text
                        //   key={link.label}
                        //   variant={"body-sm"}

                        // >
                        //   {link.label}
                        // </Text>
                        <Link
                          className={cn(
                            textVariants({
                              variant: "body-sm",
                            }),
                            "hover:text-white hover:underline cursor-pointer",
                            link.underlined
                              ? "text-white underline"
                              : "text-[#898989]",
                          )}
                          href={"#"}
                          key={link.label}
                        >
                          {link.label}
                        </Link>
                      ))}
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-10">
              <div className="flex flex-col gap-10">
                <Text variant={"card"} className="text-white">
                  Services
                </Text>
                <div className="flex flex-col gap-[30px]">
                  {[
                    { label: "UI/UX Design", underlined: false },
                    { label: "Wireframe & Prototype", underlined: false },
                    { label: "SaaS Design", underlined: true },
                    { label: "Web Development", underlined: false },
                    { label: "Software Development", underlined: false },
                  ].map((service) => (
                    <Link
                      className={cn(
                        textVariants({
                          variant: "body-sm",
                        }),
                        "hover:text-white hover:underline cursor-pointer",
                        service.underlined
                          ? "text-white underline"
                          : "text-[#898989]",
                      )}
                      href={"#"}
                      key={service.label}
                    >
                      {service.label}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-10 justify-between">
              <div className="flex flex-col gap-10">
                <div className="flex flex-col gap-10">
                  <Text variant={"card"} className="text-white">
                    Services
                  </Text>
                  <div className="flex flex-col ">
                    <div className="flex items-center pb-5  justify-between">
                      <input
                        type="text"
                        placeholder="Input Value"
                        className={cn(
                          "w-full focus:outline-none text-[16px] text-[#898989] placeholder:text-[#898989]",
                        )}
                      />
                      <Text variant={"body-sm"} className="text-[#898989]">
                        Label
                      </Text>
                    </div>
                    <div className="bg-white/10 h-px w-full"></div>
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-1.5">
                {SOCIAL_ICONS.map((icon) => (
                  <SocialIcon key={icon.name} icon={icon} />
                ))}
              </div>
            </div>
          </div>
          <NanoclawLogo />
        </div>
      </div>
      <div className=" py-11 bg-white">
        <Text variant={"body-sm"} className="text-center ">
          © 2025 <span className="font-bold">Nano Claw</span>. All rights
          reserved.
        </Text>
      </div>
    </div>
  );
};

export default Footer;

import Image from "next/image";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { getLocale, getTranslations } from "next-intl/server";
import LanguageButton from "@/components/language-button";
import { redirect } from "next/navigation";

async function LoginPage() {

  const locale = await getLocale();
  const signedIn = true;

  signedIn && redirect(`/${locale}/dashboard`);

  const t = await getTranslations("authentication.Login");

  return (
    <div className="w-full lg:grid lg:min-h-screen lg:grid-cols-2 xl:min-h-screen">
      <div className="flex items-center justify-center py-12">
        <div className="mx-auto grid w-[350px] gap-6">
          <div className="grid gap-2 text-center">
            <h1 className="text-3xl font-bold">{t("title")}</h1>
            <p className="text-balance text-muted-foreground">{t("subTitle")}</p>
          </div>
          <div className="grid gap-4">
            <div className="grid gap-2">
              <Label htmlFor="email">{t("form.email.title")}</Label>
              <Input id="email" type="email" placeholder="email@example.com" required />
            </div>
            <div className="grid gap-2">
              <div className="flex items-center ">
                <Label htmlFor="password">{t("form.password.title")}</Label>
                <Link href="/forgot-password" className="ml-auto inline-block text-sm underline">
                  {t("form.linkForgetPass.title")}
                </Link>
              </div>
              <Input id="password" type="password" required />
            </div>
            <Button type="submit" className="w-full">
              {t("form.btnLogin.title")}
            </Button>
            <Button variant="outline" className="w-full">
              {t("form.btnLoginWithGoogle.title")}
            </Button>
            <LanguageButton />
          </div>
          {/*TODO Stock use dynamic translation */}
          <div className="mt-4 text-center text-sm">
            Don&apos;t have an account?{" "}
            <Link href="#" className="underline">
              Sign up
            </Link>
          </div>
        </div>
      </div>
      <div className="hidden bg-muted lg:block">
        {/* TODO Warning from client */}
        <Image
          src="https://res.cloudinary.com/dzdcszrob/image/upload/v1721465707/playground-images/icons/q2dwvixku4oxmgjer5gd.svg"
          alt="Image"
          width="1920"
          height="1080"
          className="h-full w-full object-cover dark:brightness-[0.2] dark:grayscale"
          priority
        />
      </div>
    </div>
  );
}

export default LoginPage;

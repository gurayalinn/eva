import { useTranslations } from "next-intl";

import { ExternalLink } from "@/components/ExternalLink";
import {
  facebook,
  github,
  instagram,
  mail,
  telegram
} from "@/components/Icons";
import { NavItemFooter } from "@/components/NavItemFooter";
import { SectionSeparator } from "@/components/SectionSeparator";
import { globalConfig } from "@/utils/global.config";

const copyrightYear = new Date().getFullYear();

// eslint-disable-next-line import/prefer-default-export
export function Footer() {
  const t = useTranslations("Navigation");

  return (
    <footer className="mx-auto mb-8  flex w-full max-w-2xl flex-col">
      <SectionSeparator />
      <div className="flex justify-between">
        <div className="inline-flex items-center">
          {globalConfig.menuLinks.map((link, index) => (
            <NavItemFooter
              href={link.href}
              text={index === 0 ? "//" : t(link.title)}
              key={link.title}
            />
          ))}
        </div>
        <div className="inline-flex items-center">
          <ExternalLink href={globalConfig.telegramLink}>
            {telegram}
          </ExternalLink>
          <ExternalLink href={globalConfig.facebookLink}>
            {facebook}
          </ExternalLink>
          <ExternalLink href={globalConfig.instagramLink}>
            {instagram}
          </ExternalLink>
          <ExternalLink href={globalConfig.mail}>{mail}</ExternalLink>
        </div>
      </div>
      <div className="mt-4 flex justify-center text-sm">
        <a
          className="items-center pt-2 text-xs font-thin text-gray-800 transition-all delay-100 hover:text-teal-800 dark:text-gray-50 dark:hover:text-teal-400 md:text-sm"
          target="_blank"
          rel="noopener noreferrer"
          href={globalConfig.githubLink}
          title={t("sourcecode")}
        >
          {github}
        </a>
        <a
          className="items-center  pl-2 pt-2 text-xs font-thin text-gray-800 transition-all delay-100 hover:text-teal-800 dark:text-gray-50 dark:hover:text-teal-400 md:text-sm"
          rel="noopener noreferrer"
          title={globalConfig.copyright}
        >
          {t("copyright")} © {copyrightYear} {globalConfig.copyright}
        </a>
      </div>
    </footer>
  );
}

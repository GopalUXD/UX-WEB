const COMPANY_NAME = "株式会社ウルトラエックス";

export default function Footer() {
  return (
    <footer className="flex h-24 items-center justify-center border-t border-salte-400 px-4">
      <p className="text-center text-base text-neutral-800">
        Copyright © {COMPANY_NAME} All Rights Reserved.
      </p>
    </footer>
  );
}

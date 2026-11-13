const COMPANY_NAME = "株式会社ウルトラエックス";

export default function Footer() {
  return (
    <footer className="border-t border-blue-800 px-4 pb-10 pt-12">
      <p className="text-center text-base text-neutral-800">
        Copyright © {COMPANY_NAME} All Rights Reserved.
      </p>
    </footer>
  );
}

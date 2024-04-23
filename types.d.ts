type NavigationItemProps = {
  section: string;
  scrollToSection: (string) => void;
};

type ButtonProps = {
  color:
    | "inherit"
    | "primary"
    | "secondary"
    | "success"
    | "error"
    | "info"
    | "warning"
    | undefined;
  variant: "text" | "outlined" | "contained";
  text: string;
  link: string;
};

type MobileDrawerProps = {
  children: React.ReactNode;
  open: boolean;
  toggleDrawer: (boolean) => void;
};

interface EmailProps {
  onNext: () => void;
  onChange: (value: string) => void;
}

interface VerifyEmailProps {
  onNext: () => void;
  onChange: (code: string) => void;
  onBack: () => void;
}

interface SignUpProps {
  onNext: () => void;
  onChange: (value: string) => void;
  onBack: (value: string) => void;
}

interface PhoneNumberProps {
  onNext: (phone: string) => void;
  onBack: () => void;
  onChange: (value: string) => void;
}

interface CreatePasswordProps {
  onNext: (password: string) => void;
  onBack: () => void;
  onChange: (password: string) => void;
}

interface NamesProps {
  onFinish: (values: { firstName: string; lastName: string }) => void;
  onBack: () => void;
  onChange: (field: string, value: any) => void;
}

interface UserData {
  email: string;
  phoneNumber: string;
  password: string;
  firstName: string;
  lastName: string;
}
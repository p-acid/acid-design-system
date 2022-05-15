/// <reference types="react" />
import "./header.css";
declare type User = {
    name: string;
};
interface HeaderProps {
    user?: User;
    onLogin: () => void;
    onLogout: () => void;
    onCreateAccount: () => void;
}
declare const Header: ({ user, onLogin, onLogout, onCreateAccount }: HeaderProps) => JSX.Element;
export default Header;

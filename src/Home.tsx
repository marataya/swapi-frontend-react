import Button from "./Button.tsx";

export default function Home() {
    return (
        <main className="min-h-screen flex flex-col items-center justify-center">
            <Button bgColor="blue" fontSize="base"/>
            <Button bgColor="blue" fontSize="xl"/>
            <Button bgColor="blue" fontSize="sm"/>
        </main>
    );
}

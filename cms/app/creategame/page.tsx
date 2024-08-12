import CreateGameForm from "@/components/creategame/CreateGameForm";

export default function page() {
    return (
        <div className="mb-10">
            <h1 style={{ textAlign: "center",
                fontSize: "2rem",
                fontWeight: "bold",
                color: "#333",
                margin: "1rem 0" }}>

                Let's create a game
            </h1>
            <CreateGameForm />
        </div>
    );
}

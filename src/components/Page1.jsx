
const background = "bg-backgroundColorPrimary";

function Page1(props) {
    return (
        <div className={`relative h-[33vh] flex ${background}`}>
            <div className="container max-w-screen-xl mx-auto flex justify-center items-center text-4xl ">
                Page 1
            </div>
        </div>
    );
}

export default Page1;
import { auth } from "@clerk/nextjs/server"

export default async function Course(): Promise<React.JSX.Element> {
    const {userId} = await auth();
    
    return<>
    Hey! {userId} from course page</>
}
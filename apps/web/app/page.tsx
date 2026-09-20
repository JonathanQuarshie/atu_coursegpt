import { auth } from "@clerk/nextjs/server"
import ConvexDemo from "@/components/convex-demo"

export default async function Page() {
  await auth.protect()

  return <ConvexDemo />
}

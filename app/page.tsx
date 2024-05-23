import ThemedImage from "@/components/themed-image";

export default function Page() {
  return (
    <div>
      <h1>Hello, Next.js!</h1>
      <ThemedImage
        darkImage={"https://picsum.photos/id/1015/600/400"}
        lightImage={"https://picsum.photos/id/1015/600/400"}
        width={600}
        height={400}
        alt={"test"}
      />
    </div>
  )
}
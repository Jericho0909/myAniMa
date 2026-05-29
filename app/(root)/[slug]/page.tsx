const AnimeDetail = async ({
  params
}: {
  params: Promise<{ slug: string }>
}) => {

  const { slug } = await params

  return (
    <div className="mt-40">
      <h1>{slug}</h1>
    </div>
  )
}

export default AnimeDetail
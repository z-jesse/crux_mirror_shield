export default function FormLayout(props: any) {
  return (
    <div className='flex grow bg-defgray'>
      <div className='flex flex-col w-full max-w-4xl mx-auto justify-center'>
        {props.children}
      </div>
    </div>
  )
}

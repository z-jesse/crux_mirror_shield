export default function FormLayout(props: any) {
  return (
    <div className='flex grow bg-white'>
      <div className='flex flex-col w-full max-w-7xl mx-auto justify-center'>
        {props.children}
      </div>
    </div>
  )
}

export default function FormLayout(props: any) {
  return (
    <div className='grow bg-defgray'>
      <div className='max-w-4xl mx-auto'>
        {props.children}
      </div>
    </div>
  )
}

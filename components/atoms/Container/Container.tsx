import { ContainerType } from "./type"

const Container = ({children}:ContainerType) => {
  return (
    <div className="px-28">
      {children}
    </div>
  )
}

export default Container

import { ReactNode } from "react";

type ContainerProps = {
  children: ReactNode;
};

const Container = ({ children }: ContainerProps) => {
  return (
    <div className="flex flex-col items-center px-4 md:px-0 mx-auto max-w-[640px] lg:max-w-[768px] xl:max-w-5xl gap-8 md:gap-12">
      {children}
    </div>
  );
};

export default Container;

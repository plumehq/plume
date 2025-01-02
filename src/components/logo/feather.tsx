interface FeatherLogoProps extends React.ComponentPropsWithoutRef<"img"> {
  width?: number;
  height?: number;
}

export function FeatherLogo({
  width = 32,
  height = 32,
  ...props
}: FeatherLogoProps) {
  return (
    <img
      {...props}
      src="https://utfs.io/f/ihozsLgPeu272TVfQSElj9zMKcVLNePtR4hfdDUZbJmonCX8"
      width={width}
      height={height}
      alt="Feather Logo"
      className="h-8 w-auto"
    />
  );
}

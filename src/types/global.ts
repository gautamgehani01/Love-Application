export type ButtonVariant = 'primary' | 'secondary' | 'outline' | 'ghost'

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant
  size?: 'default' | 'sm' | 'lg'
  isLoading?: boolean
}

export type InputVariant = 'default' | 'outline'


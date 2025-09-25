import { ChevronRight } from "lucide-react";

interface BreadcrumbItem {
  label: string;
  href?: string;
  active?: boolean;
}

interface BreadcrumbProps {
  items: BreadcrumbItem[];
}

export default function Breadcrumb({ items }: BreadcrumbProps) {
  return (
    <nav aria-label="Breadcrumb" className="py-4">
      <ol className="flex items-center space-x-2 text-sm">
        {items.map((item, index) => (
          <li key={index} className="flex items-center">
            {index > 0 && (
              <ChevronRight className="w-4 h-4 text-muted-foreground mx-2" />
            )}
            {item.href && !item.active ? (
              <a 
                href={item.href}
                className="text-muted-foreground hover:text-primary transition-colors"
                data-testid={`breadcrumb-${index}`}
              >
                {item.label}
              </a>
            ) : (
              <span 
                className={item.active ? "text-foreground font-medium" : "text-muted-foreground"}
                aria-current={item.active ? "page" : undefined}
                data-testid={`breadcrumb-${index}`}
              >
                {item.label}
              </span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}
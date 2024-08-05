
export default function Layout({ 
  children 
}: { 
  children: React.ReactNode 
}) {
  return (
    <div className="bg-background-landing">
      {children}
    </div>
  );
}
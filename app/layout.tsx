import "./global.css";
export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html className="bg-red-500">
			<body>{children}</body>
		</html>
	);
}
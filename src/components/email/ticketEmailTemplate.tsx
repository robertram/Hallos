import { Html } from "@react-email/html";

export default function TicketEmail() {
  return (
    <Html>
      <body style={styles.body}>
        <table style={styles.container}>
          <tr>
            <td>
              <div style={styles.header}>
                <img
                  src="/images/hallosIcon.png"
                  alt="Hallos Logo"
                  style={styles.logo}
                />
                <h1 style={styles.title}>Your Ticket Is Ready</h1>
              </div>

              <div style={styles.centralBlock}>
                <div style={styles.greetingAndTicket}>
                  <p style={styles.text}>
                    Hi, <strong>Robert Stuart Ramirez Marin</strong> <br />
                    Your <strong style={styles.bold}>ticket name goes here</strong> ticket is ready
                  </p>

                  <div style={styles.ticketContainer}>
                    <div style={styles.lightRay1}></div>
                    <div style={styles.lightRay2}></div>
                    <div style={styles.lightRay3}></div>
                    <img
                      src="/images/ticket.png"
                      alt="Night Party Ticket"
                      style={styles.ticketImage}
                    />
                  </div>
                </div>

                <div style={styles.buttonsContainer}>
                  <a href="https://example.com/tickets" style={styles.goToTicketsButton}>
                    <img
                      src="/images/ticketIcon.png"
                      alt="Ticket Icon"
                      style={styles.icon}
                    />
                    Go to my Tickets
                  </a>
                  <a href="https://example.com/event" style={styles.eventPageButton}>
                    <img
                      src="/images/calendar.png"
                      alt="Ticket Icon"
                      style={styles.icon}
                    />
                    Open Event Page
                  </a>
                </div>
              </div>

              <div style={styles.infoSection}>
                <h2 style={styles.infoTitle}>Date & Place</h2>
                <div style={styles.infoItem}>
                  <img
                    src="/images/clock.png"
                    alt="Clock Icon"
                    style={styles.infoIcon}
                  />
                  <div>
                    <p style={styles.infoText}>
                      January 25 - 11pm - January 26 - 4am EST
                    </p>
                    <p style={styles.infoSubText}>Date & Time</p>
                  </div>
                </div>
                <div style={styles.infoItem}>
                  <img
                    src="/images/location.png"
                    alt="Location Icon"
                    style={styles.infoIcon}
                  />
                  <div>
                    <p style={styles.infoText}>
                      48 West 21st Street, New York, NY 10010 United States
                    </p>
                    <p style={styles.infoSubText}>Taj II</p>
                  </div>
                </div>
              </div>

              <div style={styles.orderDetails}>
                <h2 style={styles.infoTitle}>Order Details</h2>
                <div style={styles.detailsRow}>
                  <p style={styles.detailsLabel}>Event Name</p>
                  <p style={styles.detailsValue}>Urban Night Party</p>
                </div>
                <div style={styles.detailsRow}>
                  <p style={styles.detailsLabel}>01 Ticket</p>
                  <p style={styles.detailsValue}>$49.99</p>
                </div>
                <div style={styles.detailsRow}>
                  <p style={styles.detailsLabel}>Type</p>
                  <p style={styles.detailsValue}>VIP</p>
                </div>
                <div style={styles.detailsRow}>
                  <p style={styles.detailsLabel}>Discount</p>
                  <p style={styles.detailsValue}>$0.00</p>
                </div>
                <div style={styles.detailsRow}>
                  <p style={styles.detailsLabel}>Subtotal</p>
                  <p style={styles.detailsValue}>$49.99</p>
                </div>
                <hr style={styles.separator} />
                <div style={styles.detailsRow}>
                  <p style={styles.totalLabel}>Total</p>
                  <p style={styles.totalValue}>$49.99</p>
                </div>
                <div style={styles.footer}>
                  <a href="https://example.com/hallos" style={styles.footerButton}>
                    View on Hallos
                  </a>
                </div>
              </div>
            </td>
          </tr>
        </table>
      </body>
    </Html>
  );
}
const styles: { [key: string]: React.CSSProperties } = {
  body: {
    fontFamily: "Arial, sans-serif",
    background: "bg-darkBlue",
    margin: "0",
    padding: "0",
  },
  container: {
    backgroundColor: "#1a202c", 
    width: "100%",
    maxWidth: "500px",
    margin: "0 auto",
    borderRadius: "16px",
    padding: "20px",
    color: "#ffffff",
    boxShadow: "0 4px 20px rgba(0, 0, 0, 0.3)",
  },
  header: {
    textAlign: "center" as const,
    padding: "30px 0",
  },
  logo: {
    width: "110px",
    height: "auto",
    marginBottom: "30px",
    filter: "invert(1) brightness(5)",
    display: "block",
    marginLeft: "auto",
    marginRight: "auto",
  },
  title: {
    fontFamily: "Inter, Arial, sans-serif",
    fontSize: "24px",
    fontWeight: 600,
    lineHeight: "32px",
    color: "#FAFAFA",
    textAlign: "center",
    marginTop: "10px",
  },
  greetingAndTicket: {
    marginBottom: "20px",
    marginTop: "10px",
  },
  text: {
    fontFamily: "Inter, Arial, sans-serif",
    fontSize: "16px",
    fontWeight: 400,
    lineHeight: "24px",
    color: "#d1d1d1",
    marginBottom: "15px",
    textAlign: "center",
  },
  centralBlock: {
    background: "rgba(0, 0, 0, 0.3)",
    borderRadius: "24px",
    padding: "20px",
    margin: "20px auto",
    width: "90%",
    maxWidth: "540px",
    height: "568px",
    textAlign: "center",
    boxShadow: "0 4px 20px rgba(0, 0, 0, 0.5), inset 0 0 50px rgba(255, 255, 255, 0.1)",
    backdropFilter: "blur(8px)",
    overflow: "hidden",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    position: "relative",
    filter: "brightness(1.2)",
  },
  lightGlow: {
    position: "absolute",
    top: "50%",
    left: "50%",
    width: "300px",
    height: "300px",
    background: "radial-gradient(circle, rgba(255, 255, 255, 0.5) 0%, rgba(0, 255, 255, 0.2) 80%)",
    borderRadius: "50%",
    transform: "translate(-50%, -50%)",
    pointerEvents: "none",
    zIndex: "-1",
  },
  buttonsContainer: {
    display: "flex",
    justifyContent: "space-between",
    padding: "0",
    margin: "0",
    width: "100%",
    position: "absolute",
    bottom: "0",
    transform: "translateX(-20px)",
  },
  goToTicketsButton: {
    backgroundColor: "#D9D9D90F", // Aplicando el color con opacidad
    color: "#FFFFFF",
    font: "Neue Montreal",
    textDecoration: "none",
    textAlign: "center",
    padding: "20px 0",
    border: "none",
    fontSize: "16px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "10px",
    flex: "1",
    borderRight: "1px solid #333",
  },
  
  eventPageButton: {
    backgroundColor: "#D9D9D90F", // Aplicando el color con opacidad
    color: "#FFFFFF",
    textDecoration: "none",
    textAlign: "center",
    padding: "20px 0",
    border: "none",
    fontSize: "16px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "10px",
    flex: "1",
  },
  
  icon: {
    color: "#FFFFFF",
    fontSize: "18px",
    lineHeight: "1",
    display: "inline-block",
  },
  infoSection: {
    marginBottom: "20px",
    padding: "20px",
    backgroundColor: "#000000", // Fondo completamente negro
    borderRadius: "20px",
    backdropFilter: "blur(8px)",
    width: "90%",
    maxWidth: "540px",
    margin: "20px auto",
  },
  infoTitle: {
    fontSize: "18px",
    fontWeight: "bold",
    marginBottom: "15px",
    color: "#ffffff", // Blanco para el título
  },
  infoItem: {
    display: "flex",
    alignItems: "center",
    marginBottom: "15px",
  },
  infoIcon: {
    width: "24px",
    height: "24px",
    marginRight: "10px",
  },
  infoText: {
    fontSize: "16px",
    color: "#FAFAFA", // Blanco para el texto
    fontWeight: "bold",
    margin: 0,
  },
  infoSubText: {
    fontSize: "14px",
    color: "#BBBBBB", // Gris para el subtítulo
    margin: 0,
  },
  orderDetails: {
    marginBottom: "20px",
    padding: "20px",
    backgroundColor: "#000000", // Fondo completamente negro
    borderRadius: "20px",
    backdropFilter: "blur(8px)",
    width: "90%",
    maxWidth: "540px",
    margin: "20px auto",
  },
  detailsRow: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: "10px",
  },
  detailsLabel: {
    fontSize: "14px",
    color: "#BBBBBB", // Gris para las etiquetas
    margin: 0,
  },
  detailsValue: {
    fontSize: "14px",
    color: "#FAFAFA", // Blanco para los valores
    margin: 0,
  },
  separator: {
    border: "none",
    borderTop: "1px solid #444",
    margin: "10px 0",
  },
  totalLabel: {
    fontSize: "16px",
    fontWeight: "bold",
    color: "#BBBBBB", // Gris para el total
    margin: 0,
  },
  totalValue: {
    fontSize: "16px",
    fontWeight: "bold",
    color: "#FAFAFA", // Blanco para el total
    margin: 0,
  },
  footer: {
    textAlign: "center" as const,
    marginTop: "20px",
  },
  footerButton: {
    background: "linear-gradient(90deg, #1A82FE, #A14BFC)",
    color: "#ffffff",
    textDecoration: "none",
    textAlign: "center" as const,
    display: "block",
    width: "100%",
    maxWidth: "480px",
    height: "48px",
    lineHeight: "48px",
    borderRadius: "60px",
    fontWeight: "bold",
    fontSize: "16px",
    margin: "20px auto 0",
  },
  bold: {
    fontWeight: "bold",
    color: "#ffffff",
  },
  ticketImage: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
    borderRadius: "12px",
  },
  ticketContainer: {
    position: "relative",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    margin: "50px auto",
    width: "234px",
    height: "335px",
    borderRadius: "24px",
    overflow: "hidden",
    boxShadow: "0 4px 20px rgba(0, 0, 0, 0.6)",
    background: "radial-gradient(circle, rgba(56, 33, 94, 0.8) 0%, rgba(21, 13, 46, 1) 60%, rgba(9, 6, 30, 1) 100%)",
  },
  lightRayContainer: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: "100%",
    height: "100%",
    pointerEvents: "none",
    zIndex: "1",
  },
  lightRay1: {
    position: "absolute",
    width: "100px",
    height: "100px",
    top: "-80px",
    left: "50%",
    background: "linear-gradient(60deg, rgba(255, 255, 255, 0.3), rgba(255, 255, 255, 0))",
    opacity: 0.5,
    transform: "translateX(-50%) rotate(45deg)",
  },
  lightRay2: {
    position: "absolute",
    width: "100px",
    height: "100px",
    top: "-80px",
    left: "50%",
    background: "linear-gradient(150deg, rgba(255, 255, 255, 0.3), rgba(255, 255, 255, 0))",
    opacity: 0.5,
    transform: "translateX(-50%) rotate(135deg)",
  },
  lightRay3: {
    position: "absolute",
    width: "100px",
    height: "100px",
    top: "-80px",
    left: "50%",
    background: "linear-gradient(240deg, rgba(255, 255, 255, 0.3), rgba(255, 255, 255, 0))",
    opacity: 0.5,
    transform: "translateX(-50%) rotate(225deg)",
  },
};

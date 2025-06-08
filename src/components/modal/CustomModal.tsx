"use client";
// Indica que este componente se va a renderizar del lado del cliente (requerido para hooks o eventos)

import { Dialog, DialogContent } from "@/components/ui/dialog";
// Importa el componente Dialog y DialogContent desde la librería Shadcn UI

interface CustomModalProps {
  open: boolean; // Controla si el modal está abierto o cerrado
  onOpenChange: (open: boolean) => void; // Función que se llama cuando el estado del modal cambia
  children: React.ReactNode; // Contenido que se mostrará dentro del modal (puede ser cualquier componente JSX)
}

// Componente funcional que representa un modal reutilizable
export const CustomModal = ({ open, onOpenChange, children }: CustomModalProps) => {
  return (
    // El componente Dialog de Shadcn que se encarga del comportamiento general del modal
    <Dialog open={open} onOpenChange={onOpenChange}>

      {/* El contenido del modal con estilos personalizados */}
      <DialogContent className="bg-[#131318] border border-white/10 rounded-2xl px-6 py-8 max-w-[90vw] sm:max-w-[480px] mx-auto">
        {children}
      </DialogContent>

    </Dialog>
  );
};

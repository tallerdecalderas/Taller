/**
 * Utilidades para generar mensajes de WhatsApp
 */

import { CartItem } from "@/types/product";
import { config } from "@/utils/config";
import { formatCurrency } from "@/utils/formatMoney";

/**
 * Generar mensaje de WhatsApp formateado
 */
export function generateWhatsAppMessage(items: CartItem[]): string {
  if (items.length === 0) {
    return "Hola, me gustaría consultar sobre productos.";
  }

  let message = "🛍️ *Consulta de Productos*\n\n";
  message += "Productos de interés:\n";

  let total = 0;

  items.forEach((item, index) => {
    const subtotal = item.product.price * item.quantity;
    total += subtotal;

    message += `${index + 1}. *${item.product.name}*\n`;
    message += `   CODE: ${item.product.code}\n`;
    message += `   Cantidad: ${item.quantity}\n`;
    message += `   Precio unitario: ${formatCurrency(item.product.price)}\n`;
    message += `   Subtotal: ${formatCurrency(subtotal)}\n\n`;
  });

  message += `*Total: ${formatCurrency(total)}*\n\n`;
  message += "Favor confirmar disponibilidad y hacer presupuesto.";

  return message;
}

/**
 * Generar URL de WhatsApp con mensaje
 */
export function generateWhatsAppUrl(message: string): string {
  const phoneNumber = config.company.whatsappNumber;
  const encodedMessage = encodeURIComponent(message);
  return `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
}

/**
 * Generar URL y abrir WhatsApp en una nueva ventana
 */
export function openWhatsApp(message: string): void {
  const url = generateWhatsAppUrl(message);
  window.open(url, "_blank");
}

/**
 * Generar mensaje simple para un producto único
 */
export function generateSingleProductMessage(
  productName: string,
  code: string,
  price: number,
  quantity: number,
): string {
  return `Hola, me interesa el producto "${productName}" (CODE: ${code}). Cantidad: ${quantity}. Precio unitario: ${formatCurrency(price)}. Total: ${formatCurrency(price * quantity)}`;
}

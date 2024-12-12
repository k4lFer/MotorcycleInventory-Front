"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { DatePickerWithRange } from "@/components/date-picker-with-range"
import { toast } from "@/hooks/use-toast"

export default function ReportsPage() {
  const [reportType, setReportType] = useState("")
  const [dateRange, setDateRange] = useState<{ from: Date | null; to: Date | null }>({ from: null, to: null });
  const generateReport = async () => {
    if (!reportType || !dateRange.from || !dateRange.to) {
      toast({
        title: "Error",
        description: "Por favor, selecciona el tipo de reporte y el rango de fechas.",
        variant: "destructive",
      })
      return
    }


    // Logica para generar los pdf

    
    toast({
      title: "Reporte generado",
      description: `Se ha generado el reporte de ${reportType} para el período seleccionado.`,
    })
  }

  return (
    <div className="space-y-4">
      <h1 className="text-2xl font-bold">Generación de Reportes</h1>
      <Card>
        <CardHeader>
          <CardTitle>Configurar Reporte</CardTitle>
          <CardDescription>Selecciona el tipo de reporte y el rango de fechas para generar un PDF.</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <label htmlFor="report-type" className="text-sm font-medium">Tipo de Reporte</label>
            <Select value={reportType} onValueChange={setReportType}>
              <SelectTrigger id="report-type">
                <SelectValue placeholder="Selecciona el tipo de reporte" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="ventas">Reporte de Ventas</SelectItem>
                <SelectItem value="inventario">Reporte de Inventario</SelectItem>
                <SelectItem value="clientes">Reporte de Clientes</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="space-y-2">
            <label className="text-sm font-medium">Rango de Fechas</label>
            <DatePickerWithRange setDateRange={setDateRange} />
          </div>
        </CardContent>
        <CardFooter>
          <Button onClick={generateReport}>Generar Reporte PDF</Button>
        </CardFooter>
      </Card>
    </div>
  )
}


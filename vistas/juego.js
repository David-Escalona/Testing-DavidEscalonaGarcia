export const home = {
    template: 
    `
    <!DOCTYPE html>
    <html lang="es">
	<head>
		<meta charset="UTF-8" />
		<meta name="viewport" content="width=device-width, initial-scale=1.0" />
		<title>Prototipo</title>
		<!-- bootstrap -->
		<link
			href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.1/dist/css/bootstrap.min.css"
			rel="stylesheet"
			integrity="sha384-4bw+/aepP/YC94hEpVNVgiZdgIC5+VKNBQNGCHeKRQN+PtmoHDEXuppvnDJzQIu9"
			crossorigin="anonymous"
		/>
		<!-- fonts -->
		<link rel="preconnect" href="https://fonts.googleapis.com" />
		<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
		<link
			href="https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300;0,400;0,500;0,600;1,400;1,500;1,600&family=Raleway:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;1,100;1,200;1,300;1,400;1,500;1,600&family=VT323&display=swap"
			rel="stylesheet"
		/>

		<!-- icons -->
		<link
			rel="stylesheet"
			href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.10.5/font/bootstrap-icons.css"
		/>

		<style>
			body {
				background-repeat: no-repeat;
				background-size: cover;
				background-image: url("img/fondo.jpg");
				font-family: "VT323", monospace;
				font-size: 25px;
			}
		</style>
		<link rel="stylesheet" href="style.css" />
	</head>
	<body class="text-light">
    <div class="col-4 d-flex justify-content-center">
						<div id="panel" class="p-5">
							<div class="fila d-flex justify-content-center">
								<div class="celda bg-dark border-secondary">x</div>
								<div class="celda bg-dark border-secondary">x</div>
								<div class="celda bg-dark border-secondary">x</div>
								<div class="celda bg-dark border-secondary">x</div>
								<div class="celda bg-dark border-secondary">x</div>
								<div class="celda bg-dark border-secondary">x</div>
								<div class="celda bg-dark border-secondary">x</div>
								<div class="celda bg-dark border-secondary">x</div>
								<div class="celda bg-dark border-secondary">x</div>
								<div class="celda bg-dark border-secondary">x</div>
							</div>
							<div class="fila d-flex justify-content-center">
								<div class="celda bg-dark border-secondary">x</div>
								<div class="celda bg-dark border-secondary">x</div>
								<div class="celda bg-dark border-secondary">x</div>
								<div class="celda bg-dark border-secondary">x</div>
								<div class="celda bg-dark border-secondary">x</div>
								<div class="celda bg-dark border-secondary">x</div>
								<div class="celda bg-dark border-secondary">x</div>
								<div class="celda bg-dark border-secondary">x</div>
								<div class="celda bg-dark border-secondary">x</div>
								<div class="celda bg-dark border-secondary">x</div>
							</div>
							<div class="fila d-flex justify-content-center">
								<div class="celda bg-dark border-secondary">x</div>
								<div class="celda bg-dark border-secondary">x</div>
								<div class="celda bg-dark border-secondary">x</div>
								<div class="celda bg-dark border-secondary">x</div>
								<div class="celda bg-dark border-secondary">x</div>
								<div class="celda bg-dark border-secondary">x</div>
								<div class="celda bg-dark border-secondary">x</div>
								<div class="celda bg-dark border-secondary">x</div>
								<div class="celda bg-dark border-secondary">x</div>
								<div class="celda bg-dark border-secondary">x</div>
							</div>
							<div class="fila d-flex justify-content-center">
								<div class="celda bg-dark border-secondary">x</div>
								<div class="celda bg-dark border-secondary">x</div>
								<div class="celda bg-dark border-secondary">x</div>
								<div class="celda bg-dark border-secondary">x</div>
								<div class="celda bg-dark border-secondary">x</div>
								<div class="celda bg-dark border-secondary">x</div>
								<div class="celda bg-dark border-secondary">x</div>
								<div class="celda bg-dark border-secondary">x</div>
								<div class="celda bg-dark border-secondary">x</div>
								<div class="celda bg-dark border-secondary">x</div>
							</div>
							<div class="fila d-flex justify-content-center">
								<div class="celda bg-dark border-secondary">x</div>
								<div class="celda bg-dark border-secondary">x</div>
								<div class="celda bg-dark border-secondary">x</div>
								<div class="celda bg-dark border-secondary">x</div>
								<div class="celda bg-dark border-secondary">x</div>
								<div class="celda bg-dark border-secondary">x</div>
								<div class="celda bg-dark border-secondary">x</div>
								<div class="celda bg-dark border-secondary">x</div>
								<div class="celda bg-dark border-secondary">x</div>
								<div class="celda bg-dark border-secondary">x</div>
							</div>
							<div class="fila d-flex justify-content-center">
								<div class="celda bg-dark border-secondary">x</div>
								<div class="celda bg-dark border-secondary">x</div>
								<div class="celda bg-dark border-secondary">x</div>
								<div class="celda bg-dark border-secondary">x</div>
								<div class="celda bg-dark border-secondary">x</div>
								<div class="celda bg-dark border-secondary">x</div>
								<div class="celda bg-dark border-secondary">x</div>
								<div class="celda bg-dark border-secondary">x</div>
								<div class="celda bg-dark border-secondary">x</div>
								<div class="celda bg-dark border-secondary">x</div>
							</div>
							<div class="fila d-flex justify-content-center">
								<div class="celda bg-dark border-secondary">x</div>
								<div class="celda bg-dark border-secondary">x</div>
								<div class="celda bg-dark border-secondary">x</div>
								<div class="celda bg-dark border-secondary">x</div>
								<div class="celda bg-dark border-secondary">x</div>
								<div class="celda bg-dark border-secondary">x</div>
								<div class="celda bg-dark border-secondary">x</div>
								<div class="celda bg-dark border-secondary">x</div>
								<div class="celda bg-dark border-secondary">x</div>
								<div class="celda bg-dark border-secondary">x</div>
							</div>
							<div class="fila d-flex justify-content-center">
								<div class="celda bg-dark border-secondary">x</div>
								<div class="celda bg-dark border-secondary">x</div>
								<div class="celda bg-dark border-secondary">x</div>
								<div class="celda bg-dark border-secondary">x</div>
								<div class="celda bg-dark border-secondary">x</div>
								<div class="celda bg-dark border-secondary">x</div>
								<div class="celda bg-dark border-secondary">x</div>
								<div class="celda bg-dark border-secondary">x</div>
								<div class="celda bg-dark border-secondary">x</div>
								<div class="celda bg-dark border-secondary">x</div>
							</div>
							<div class="fila d-flex justify-content-center">
								<div class="celda bg-dark border-secondary">x</div>
								<div class="celda bg-dark border-secondary">x</div>
								<div class="celda bg-dark border-secondary">x</div>
								<div class="celda bg-dark border-secondary">x</div>
								<div class="celda bg-dark border-secondary">x</div>
								<div class="celda bg-dark border-secondary">x</div>
								<div class="celda bg-dark border-secondary">x</div>
								<div class="celda bg-dark border-secondary">x</div>
								<div class="celda bg-dark border-secondary">x</div>
								<div class="celda bg-dark border-secondary">x</div>
							</div>
							<div class="fila d-flex justify-content-center">
								<div class="celda bg-dark border-secondary">x</div>
								<div class="celda bg-dark border-secondary">x</div>
								<div class="celda bg-dark border-secondary">x</div>
								<div class="celda bg-dark border-secondary">x</div>
								<div class="celda bg-dark border-secondary">x</div>
								<div class="celda bg-dark border-secondary">x</div>
								<div class="celda bg-dark border-secondary">x</div>
								<div class="celda bg-dark border-secondary">x</div>
								<div class="celda bg-dark border-secondary">x</div>
								<div class="celda bg-dark border-secondary">x</div>
							</div>
							<div class="fila d-flex justify-content-center">
								<div class="celda bg-dark border-secondary">x</div>
								<div class="celda bg-dark border-secondary">x</div>
								<div class="celda bg-dark border-secondary">x</div>
								<div class="celda bg-dark border-secondary">x</div>
								<div class="celda bg-dark border-secondary">x</div>
								<div class="celda bg-dark border-secondary">x</div>
								<div class="celda bg-dark border-secondary">x</div>
								<div class="celda bg-dark border-secondary">x</div>
								<div class="celda bg-dark border-secondary">x</div>
								<div class="celda bg-dark border-secondary">x</div>
							</div>
							<div class="fila d-flex justify-content-center">
								<div class="celda bg-dark border-secondary">x</div>
								<div class="celda bg-dark border-secondary">x</div>
								<div class="celda bg-dark border-secondary">x</div>
								<div class="celda bg-dark border-secondary">x</div>
								<div class="celda bg-dark border-secondary">x</div>
								<div class="celda bg-dark border-secondary">x</div>
								<div class="celda bg-dark border-secondary">x</div>
								<div class="celda bg-dark border-secondary">x</div>
								<div class="celda bg-dark border-secondary">x</div>
								<div class="celda bg-dark border-secondary">x</div>
							</div>
							<div class="fila d-flex justify-content-center">
								<div class="celda bg-dark border-secondary">x</div>
								<div class="celda bg-dark border-secondary">x</div>
								<div class="celda bg-dark border-secondary">x</div>
								<div class="celda bg-dark border-secondary">x</div>
								<div class="celda bg-dark border-secondary">x</div>
								<div class="celda bg-dark border-secondary">x</div>
								<div class="celda bg-dark border-secondary">x</div>
								<div class="celda bg-dark border-secondary">x</div>
								<div class="celda bg-dark border-secondary">x</div>
								<div class="celda bg-dark border-secondary">x</div>
							</div>
							<div class="fila d-flex justify-content-center">
								<div class="celda bg-dark border-secondary">x</div>
								<div class="celda bg-dark border-secondary">x</div>
								<div class="celda bg-dark border-secondary">x</div>
								<div class="celda bg-dark border-secondary">x</div>
								<div class="celda bg-dark border-secondary">x</div>
								<div class="celda bg-dark border-secondary">x</div>
								<div class="celda bg-dark border-secondary">x</div>
								<div class="celda bg-dark border-secondary">x</div>
								<div class="celda bg-dark border-secondary">x</div>
								<div class="celda bg-dark border-secondary">x</div>
							</div>
							<div class="fila d-flex justify-content-center">
								<div class="celda bg-dark border-secondary">x</div>
								<div class="celda bg-dark border-secondary">x</div>
								<div class="celda bg-dark border-secondary">x</div>
								<div class="celda bg-dark border-secondary">x</div>
								<div class="celda bg-dark border-secondary">x</div>
								<div class="celda bg-dark border-secondary">x</div>
								<div class="celda bg-dark border-secondary">x</div>
								<div class="celda bg-dark border-secondary">x</div>
								<div class="celda bg-dark border-secondary">x</div>
								<div class="celda bg-dark border-secondary">x</div>
							</div>
							<div class="fila d-flex justify-content-center">
								<div class="celda bg-dark border-secondary">x</div>
								<div class="celda bg-dark border-secondary">x</div>
								<div class="celda bg-dark border-secondary">x</div>
								<div class="celda bg-dark border-secondary">x</div>
								<div class="celda bg-dark border-secondary">x</div>
								<div class="celda bg-dark border-secondary">x</div>
								<div class="celda bg-dark border-secondary">x</div>
								<div class="celda bg-dark border-secondary">x</div>
								<div class="celda bg-dark border-secondary">x</div>
								<div class="celda bg-dark border-secondary">x</div>
							</div>
							<div class="fila d-flex justify-content-center">
								<div class="celda bg-dark border-secondary">x</div>
								<div class="celda bg-dark border-secondary">x</div>
								<div class="celda bg-dark border-secondary">x</div>
								<div class="celda bg-dark border-secondary">x</div>
								<div class="celda bg-dark border-secondary">x</div>
								<div class="celda bg-dark border-secondary">x</div>
								<div class="celda bg-dark border-secondary">x</div>
								<div class="celda bg-dark border-secondary">x</div>
								<div class="celda bg-dark border-secondary">x</div>
								<div class="celda bg-dark border-secondary">x</div>
							</div>
							<div class="fila d-flex justify-content-center">
								<div class="celda bg-dark border-secondary">x</div>
								<div class="celda bg-dark border-secondary">x</div>
								<div class="celda bg-dark border-secondary">x</div>
								<div class="celda bg-dark border-secondary">x</div>
								<div class="celda bg-dark border-secondary">x</div>
								<div class="celda bg-dark border-secondary">x</div>
								<div class="celda bg-dark border-secondary">x</div>
								<div class="celda bg-dark border-secondary">x</div>
								<div class="celda bg-dark border-secondary">x</div>
								<div class="celda bg-dark border-secondary">x</div>
							</div>
							<div class="fila d-flex justify-content-center">
								<div class="celda bg-dark border-secondary">x</div>
								<div class="celda bg-dark border-secondary">x</div>
								<div class="celda bg-dark border-secondary">x</div>
								<div class="celda bg-dark border-secondary">x</div>
								<div class="celda bg-dark border-secondary">x</div>
								<div class="celda bg-dark border-secondary">x</div>
								<div class="celda bg-dark border-secondary">x</div>
								<div class="celda bg-dark border-secondary">x</div>
								<div class="celda bg-dark border-secondary">x</div>
								<div class="celda bg-dark border-secondary">x</div>
							</div>
							<div class="fila d-flex justify-content-center">
								<div class="celda bg-dark border-secondary">x</div>
								<div class="celda bg-dark border-secondary">x</div>
								<div class="celda bg-dark border-secondary">x</div>
								<div class="celda bg-dark border-secondary">x</div>
								<div class="celda bg-dark border-secondary">x</div>
								<div class="celda bg-dark border-secondary">x</div>
								<div class="celda bg-dark border-secondary">x</div>
								<div class="celda bg-dark border-secondary">x</div>
								<div class="celda bg-dark border-secondary">x</div>
								<div class="celda bg-dark border-secondary">x</div>
							</div>
						</div>
					</div>
					<!-- Panel derecha -->
					<div
						class="col-4 d-flex flex-column justify-content-start align-items-center p-5"
					>
						<div id="piezaSiguiente">
							<h4>Pieza siguiente:</h4>
							<div class="piezaSiguiente m-2">
								<div class="fila d-flex justify-content-center">
									<div class="celda bg-primary bg-gradient border-dark">x</div>
									<div class="celda bg-dark border-secondary">x</div>
								</div>
								<div class="fila d-flex justify-content-center">
									<div class="celda bg-primary bg-gradient border-dark">x</div>
									<div class="celda bg-dark border-secondary">x</div>
								</div>
								<div class="fila d-flex justify-content-center">
									<div class="celda bg-primary bg-gradient border-dark">x</div>
									<div class="celda bg-primary bg-gradient border-dark">x</div>
								</div>
							</div>
							<div class="piezaSiguiente m-2">
								<div class="fila d-flex justify-content-center">
									<div class="celda bg-primary bg-gradient border-dark">x</div>
									<div class="celda bg-dark border-secondary">x</div>
								</div>
								<div class="fila d-flex justify-content-center">
									<div class="celda bg-primary bg-gradient border-dark">x</div>
									<div class="celda bg-dark border-secondary">x</div>
								</div>
								<div class="fila d-flex justify-content-center">
									<div class="celda bg-primary bg-gradient border-dark">x</div>
									<div class="celda bg-primary bg-gradient border-dark">x</div>
								</div>
							</div>
							<div class="piezaSiguiente m-2">
								<div class="fila d-flex justify-content-center">
									<div class="celda bg-primary bg-gradient border-dark">x</div>
									<div class="celda bg-dark border-secondary">x</div>
								</div>
								<div class="fila d-flex justify-content-center">
									<div class="celda bg-primary bg-gradient border-dark">x</div>
									<div class="celda bg-dark border-secondary">x</div>
								</div>
								<div class="fila d-flex justify-content-center">
									<div class="celda bg-primary bg-gradient border-dark">x</div>
									<div class="celda bg-primary bg-gradient border-dark">x</div>
								</div>
							</div>
						</div>
						<hr />
						<div id="piezaGuardada">
							<h4>Pieza guardada:</h4>
							<div class="piezaGuardada">
								<div class="piezaSiguiente m-2">
									<div class="fila d-flex justify-content-center">
										<div class="celda bg-warning bg-gradient border-dark">x</div>
										<div class="celda bg-warning border-secondary">x</div>
									</div>
									<div class="fila d-flex justify-content-center">
										<div class="celda bg-warning bg-gradient border-dark">x</div>
										<div class="celda bg-warning border-secondary">x</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
    `,

    script: () => {
    }
}
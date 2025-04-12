import flet as ft

def main(page: ft.Page):
    page.title = "Painel do Operador"
    page.window_width = 400
    page.window_height = 500

    def login(e):
        if user.value == "admin" and password.value == "1234":
            page.clean()
            page.add(ft.Text("✅ Bem-vindo ao painel! (versão inicial)"))
        else:
            page.snack_bar = ft.SnackBar(ft.Text("❌ Login inválido"))
            page.snack_bar.open = True
            page.update()

    user = ft.TextField(label="Usuário")
    password = ft.TextField(label="Senha", password=True)
    login_button = ft.ElevatedButton("Entrar", on_click=login)

    page.add(user, password, login_button)

ft.app(target=main, port=8550, view=ft.WEB_BROWSER)


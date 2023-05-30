import requests

curr_size = "5x5-easy"

get_puzzle_url = (
    f"https://www.puzzles-mobile.com/slant/random/{curr_size}/get?fromSolved="
)
post_puzzle_url = f"https://www.puzzles-mobile.com/slant/random/{curr_size}"

def get_puzzle() -> tuple[str, str]:
    """returns task string and a token, which you need to link the retrieved puzzle to your solution submission later"""
    resp: dict[str, str] = requests.get(
        url=get_puzzle_url
    ).json()
    return resp["task"], resp["token"]

def submit(token: str, solution: str) -> bool:
    """submits the solution for checking"""
    resp = requests.post(
        url=post_puzzle_url,
        data={
            "token": token,
            "solution": solution
        },
    ).json()
    print(resp) # testing purposes
    return resp["status"]
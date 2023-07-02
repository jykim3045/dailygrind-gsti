result = {1: 11928, 2: 14806, 3: 23395, 4: 15250, 5: 4775, 6: 10148, 7: 22594, 8: 14992, 9: 16030, 10: 18296, 11: 22661, 12: 19525}
tot_val = 0

for key, val in result.items():
    tot_val += val

for key, val in result.items():
    print(key, val/tot_val)
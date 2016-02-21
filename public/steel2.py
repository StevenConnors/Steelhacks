def calcGrav(time, Vi):
	a = -9.81
	u = Vi
	t = time
	s = u*t + 0.5*a*(t**2)
	return (s)


print(calcGrav(6,6))

